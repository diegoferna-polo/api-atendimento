import { Injectable } from '@nestjs/common';
import { Prisma, Visitas } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VisitasService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: Prisma.VisitasWhereUniqueInput): Promise<Visitas | null> {
    return this.prisma.visitas.findUnique({
      where: id,
    });
  }

  async getAll(): Promise<Visitas[]> {
    return this.prisma.visitas.findMany();
  }

  async create(data: Prisma.VisitasCreateInput): Promise<Visitas> {
    return this.prisma.visitas.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.VisitasWhereUniqueInput;
    data: Prisma.VisitasUpdateInput;
  }): Promise<Visitas> {
    const { where, data } = params;
    return this.prisma.visitas.update({
      data,
      where,
    });
  }

  async delte(where: Prisma.VisitasWhereUniqueInput): Promise<Visitas> {
    return this.prisma.visitas.delete({
      where,
    });
  }
}
