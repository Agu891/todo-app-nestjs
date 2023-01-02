import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TodosDocument = HydratedDocument<Todos>;

@Schema()
export class Todos {
  @Prop()
  description: string;
  @Prop({ default: false })
  isComplete: boolean;
  @Prop({ default: Date.now })
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

export const TodosSchema = SchemaFactory.createForClass(Todos);
