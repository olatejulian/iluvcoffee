import { DynamicModule, Module } from '@nestjs/common';
import { createConnection, ConnectionOptions } from 'typeorm';

@Module({
    providers: [
        {
            provide: 'CONNECTION',
            useValue: createConnection({
                type: 'postgres',
                username: 'postgres',
                password: 'postgres',
                host: 'localhost',
                port: 5432,
                database: 'postgres',
            }),
        },
    ],
})
export class DatabaseModule {
    static register(options: ConnectionOptions): DynamicModule {
        return {
            module: DatabaseModule,
            providers: [
                {
                    provide: 'CONNECTION', // 👈
                    useValue: createConnection(options),
                },
            ],
        };
    }
}
