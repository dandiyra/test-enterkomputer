import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from "typeorm";
import { User } from "./User";
import { Produk } from "./Produk";
import { Order } from "./Order";
import { PrinterKasir } from "./PrinterKasir";

@Entity()

export class Table extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    table_no: number;
    
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
    
    @Column({ type: "timestamp", default : null})
    deleted_at?: string;

    @OneToMany(type => Order, order => order.table)
    order!: Order[];
    
    @OneToMany(type => PrinterKasir, kasir => kasir.table)
    kasir!: PrinterKasir[];

}
