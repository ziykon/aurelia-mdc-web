import template from '../component-viewer/component-viewer.html';
import { customElement, route } from 'aurelia';
import { ComponentViewer } from '../component-viewer/component-viewer';
import { LayoutGridExamples } from './layout-grid-examples';
import { ApiViewer } from '../api-viewer/api-viewer';

@customElement({ name: 'layout-grid', template })
@route({
  routes: [
    // { path: '', redirectTo: 'examples' },
    { id: 'examples', path: 'examples', title: 'Examples', component: LayoutGridExamples },
    { id: 'api', title: 'Api', component: ApiViewer }
  ]
})
export class LayoutGrid extends ComponentViewer { }