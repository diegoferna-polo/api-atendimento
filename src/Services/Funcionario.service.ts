import { Injectable } from '@nestjs/common';
import { Prisma, Funcionario } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    funcionarioWhereUniqueInput: Prisma.FuncionarioWhereUniqueInput,
  ): Promise<Funcionario | null> {
    return this.prisma.funcionario.findUnique({
      where: funcionarioWhereUniqueInput,
    });
  }

  async getAll(): Promise<Funcionario[]> {
    return this.prisma.funcionario.findMany();
  }

  async create(data: Prisma.FuncionarioCreateInput): Promise<Funcionario> {
    return this.prisma.funcionario.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.FuncionarioWhereUniqueInput;
    data: Prisma.FuncionarioUpdateInput;
  }): Promise<Funcionario> {
    const { where, data } = params;
    return this.prisma.funcionario.update({
      data,
      where,
    });
  }

  async delte(where: Prisma.FuncionarioWhereUniqueInput): Promise<Funcionario> {
    return this.prisma.funcionario.delete({
      where,
    });
  }
}
