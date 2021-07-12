import { IContainer } from 'aurelia';
import { MdcFab } from './mdc-fab';
import { MdcFabIcon } from './mdc-fab-icon';
import { RippleConfiguration } from '@aurelia-mdc-web/ripple';
import { EnhanceMdcFab } from './enhance-mdc-fab';

export { MdcFab } from './mdc-fab';

export const FabConfiguration = {
  register(container: IContainer): IContainer {
    return container.register(MdcFab, MdcFabIcon, RippleConfiguration, EnhanceMdcFab);
  }
};

