import { Entity } from './entity';

/**
 * @abstract classe abstrata
 * @description abstração do tipo (gateway adapter) para segregação
 * de interface e implementação de classes.
 */

export abstract class Repository<T extends Entity, D = never> {
  public abstract findAll(): Promise<T[]>;
  public abstract count?(): Promise<number>;
  public abstract create(data: T): Promise<T>;
  public abstract getById(id: number): Promise<T>;
  public abstract delete(id: number): Promise<void>;
  public abstract update(id: number, data: Partial<T>): Promise<T>;
  public abstract createMany?(data: T[], args?: D): Promise<T[] | D>;
}
