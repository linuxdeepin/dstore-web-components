import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

import { BaseService } from '../../services/base.service';
import { AppService } from '../../services/app.service';

import { App } from '../../services/app';
import { SectionApp } from '../../services/section';

@Component({
  selector: 'dstore-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() title = '';
  @Input() apps: SectionApp[] = [];

  metadataServer: string;

  constructor(private baseService: BaseService) {
    this.metadataServer = baseService.serverHosts.metadataServer;
  }

  ngOnInit() {}
}
