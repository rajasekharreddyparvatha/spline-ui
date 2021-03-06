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

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core'
import { ExecutionEventLineageNode } from 'spline-api'
import { SdWidgetSchema } from 'spline-common'
import { BaseLocalStateComponent } from 'spline-utils'

import { EventNodeInfo } from '../../models'


@Component({
    selector: 'event-node-info',
    templateUrl: './event-node-info.component.html',
    styleUrls: ['./event-node-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventNodeInfoComponent extends BaseLocalStateComponent<EventNodeInfo.NodeInfoViewState> implements OnChanges {

    @Input() nodeRelations: EventNodeInfo.NodeRelationsInfo

    @Output() focusNode$ = new EventEmitter<{ nodeId: string }>()
    @Output() launchNode$ = new EventEmitter<{ nodeId: string }>()
    @Output() highlightNodeRelations$ = new EventEmitter<{ nodeId: string }>()

    constructor() {
        super()
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes?.nodeRelations && !!changes.nodeRelations.currentValue) {
            const nodeRelations: EventNodeInfo.NodeRelationsInfo = changes.nodeRelations.currentValue
            this.updateState({
                nodeDvs: this.toNodeDvs(nodeRelations.node),
                childrenDvs: nodeRelations.children.map((node) => this.toNodeDvs(node)),
                parentsDvs: nodeRelations.parents.map((node) => this.toNodeDvs(node)),
                parentsNumber: nodeRelations?.parents?.length ?? 0,
                childrenNumber: nodeRelations?.children?.length ?? 0,
            })
        }
    }

    private toNodeDvs(node: ExecutionEventLineageNode): SdWidgetSchema {
        return EventNodeInfo.toDataSchema(
            node,
            (nodeId) => this.onNodeLaunch(nodeId),
            (nodeId) => this.onNodeFocus(nodeId),
            (nodeId) => this.onNodeHighlightRelations(nodeId),
        )
    }

    private onNodeFocus(nodeId: string): void {
        this.focusNode$.next({ nodeId })
    }

    private onNodeHighlightRelations(nodeId: string): void {
        this.highlightNodeRelations$.next({ nodeId })
    }

    private onNodeLaunch(nodeId: string): void {
        this.launchNode$.next({ nodeId })
    }
}
