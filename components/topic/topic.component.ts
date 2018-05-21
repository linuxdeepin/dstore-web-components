import { Component, OnInit, Input } from '@angular/core';

import { BaseService } from '../../services/base.service';
import { Section, SectionTopic } from '../../services/section';

@Component({
  selector: 'dstore-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
})
export class TopicComponent implements OnInit {
  constructor() {}
  server = BaseService.serverHosts.operationServer;
  @Input() title: string;
  @Input() section: Section;
  @Input() topicList: SectionTopic[];

  ngOnInit() {}
}
