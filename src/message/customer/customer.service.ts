import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private readonly prisma: PrismaService) {}
  async findCustomer(id: string) {
    return await this.prisma.customer.findFirst({
      where: {
        user: id,
      },
      include: {
        messages: {
          select: {
            role: true,
            content: true,
          },
        },
      },
    