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


import { DataSourceInfo } from '../data-source'


export type ExecutionPlan = {
    id: string
    inputDataSources?: DataSourceInfo[]
    outputDataSource?: DataSourceInfo
    agentInfo?: ExecutionPlanAgentInfo
    systemInfo?: ExecutionPlanSystemInfo
    extraInfo?: ExecutionPlanExtraInfo
}

export type ExecutionPlanAgentInfo = {
    name: string
    version: string
}


export type ExecutionPlanSystemInfo =
    & Record<string, any>
    &
    {
        name: string
        version: string
    }

export type ExecutionPlanDto = {
    _id: string
    inputs?: DataSourceInfo[]
    output?: DataSourceInfo
    agentInfo?: ExecutionPlanAgentInfo
    systemInfo?: ExecutionPlanSystemInfo
    extra?: ExecutionPlanExtraInfo
}

export type ExecutionPlanExtraInfo = Record<string, any>

export function toExecutionPlan(entity: ExecutionPlanDto): ExecutionPlan {
    return {
        id: entity._id,
        inputDataSources: entity.inputs,
        outputDataSource: entity.output,
        agentInfo: entity.agentInfo,
        systemInfo: entity.systemInfo,
        extraInfo: entity.extra,
    }
}

