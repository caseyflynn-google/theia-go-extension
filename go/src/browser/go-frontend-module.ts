/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { ContainerModule } from "inversify";
import { LanguageClientContribution } from "@theia/languages/lib/browser";
import { GoClientContribution } from "./go-client-contribution";
import { GoCommandContribution } from "./go-command-contribution";
import { MenuContribution, CommandContribution } from '@theia/core';
import { GoCommands } from './go-commands';
import { interfaces } from 'inversify';
import { GoMenuContribution } from './go-menu-contribution';
import logViewContainerModule from './logview/log-view-module';

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind, isBound: interfaces.IsBound, rebind: interfaces.Rebind) => {
    bind(LanguageClientContribution).to(GoClientContribution).inSingletonScope();
    bind(MenuContribution).to(GoMenuContribution).inSingletonScope();
    bind(CommandContribution).to(GoCommandContribution).inSingletonScope();
	bind(GoCommands).to(GoCommands).inSingletonScope();
	logViewContainerModule.registry(bind, unbind, isBound, rebind);
});

