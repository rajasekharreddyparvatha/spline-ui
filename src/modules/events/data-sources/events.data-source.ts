/*
 * Copyright 2020 ABSA Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Observable } from 'rxjs'
import {
    ExecutionEvent,
    ExecutionEventFacade,
    ExecutionEventField,
    ExecutionEventsPageResponse,
    ExecutionEventsQuery,
    QuerySorter,
} from 'spline-api'
import { SearchDataSource, SearchQuery } from 'spline-utils'
import SortDir = QuerySorter.SortDir


export class EventsDataSource extends SearchDataSource<ExecutionEvent,
    ExecutionEventsPageResponse,
    ExecutionEventsQuery.QueryFilter,
    ExecutionEventField> {

    constructor(private readonly executionEventFacade: ExecutionEventFacade) {
        super()

        this.updateAndApplyDefaultSearchParams({
            filter: {
                asAtTime: new Date().getTime()
            },
            sortBy: [
                {
                    field: ExecutionEventField.timestamp,
                    dir: SortDir.DESC
                }
            ]
        })
    }

    protected getDataObserver(
        searchParams: SearchQuery.SearchParams<ExecutionEventsQuery.QueryFilter, ExecutionEventField>,
        force: boolean,
    ): Observable<ExecutionEventsPageResponse> {

        const queryParams = this.toQueryParams(searchParams)
        return this.executionEventFacade.fetchList(queryParams)
    }

    private toQueryParams(
        searchParams: SearchQuery.SearchParams<ExecutionEventsQuery.QueryFilter, ExecutionEventField>,
    ): ExecutionEventsQuery.QueryParams {
        const queryFilter = {
            ...searchParams.filter,
            ...searchParams.staticFilter,
            searchTerm: searchParams.searchTerm,
        }
        return {
            filter: queryFilter,
            pager: searchParams.pager,
            sortBy: searchParams.sortBy,
        }
    }
}
