import { Injectable } from '@nestjs/common';
import { CustomerService } from './customer/customer.service';
import { IncomingMessageDto } from './dto/incoming-message.dto.';
import { OpenAiService } from './open-ai/open-ai.service';
import { Client } from 'whatsapp-web.js';
import {
  getHelpMessage,
  getThankYouMessage,
  getDonationMessage,
  getClearChatSuccessMessage,
  getHelperSuporterMessage,
} from './helpers/chat-messages';
import { getServiceUnavailableError } from './helpers/error-messages';

@Injectable()
export class MessageService {
  client: Client;
  constructor(
    private readonly openAiService: OpenAiService,
    private readonly customerService: CustomerService,
  ) {}

  async createMessage(incomingMessageDto: IncomingMessageDto) {
    const user = incomingMessageDto.from;
    c