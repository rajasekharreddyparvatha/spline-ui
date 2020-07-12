/*
 * Copyright (c) 2020 ABSA Group Limited
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

import { ExecutionEventLineageOverview } from 'spline-api'
import { SgData } from 'spline-common'

import { EventInfo } from '../../components'
import { EventNodeControl } from '../../models'


export namespace EventOverviewPage {

    export type Data = {
        graphData: SgData
        eventInfo: EventInfo.Data
    }


    export function toData(executionEventId: string, lineageOverview: ExecutionEventLineageOverview): Data {
        const targetEdge = lineageOverview.lineage.links
            .find(
                x => x.target === lineageOverview.executionEventInfo.targetDataSourceId,
            )
        const eventNode = targetEdge
            ? lineageOverview.lineage.nodes.find(x => x.id === targetEdge.source)
            : undefined


        return {
            graphData: {
                nodes: lineageOverview.lineage.nodes.map(nodeSource => EventNodeControl.toNode(nodeSource)),
                links: lineageOverview.lineage.links
            },
            eventInfo: {
                id: executionEventId,
                name: eventNode ? eventNode.name : 'NaN',
                applicationId: lineageOverview.executionEventInfo.applicationId,
                executedAt: new Date(lineageOverview.executionEventInfo.timestamp)
            },
        }
    }
}