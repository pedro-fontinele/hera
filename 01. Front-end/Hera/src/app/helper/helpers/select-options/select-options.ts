import { PoMultiselectOption, PoSelectOption } from "@po-ui/ng-components";

export abstract class SelectOptions {
    public static optionsSku: Array<PoMultiselectOption> = [
        { value: 'UN-01', label: 'Unidade' },
        { value: 'CX-12', label: 'Caixa com 12' },
        { value: 'CX-10', label: 'Caixa com 10' },
        { value: 'CX-08', label: 'Caixa com 08' },
        { value: 'CX-06', label: 'Caixa com 06' },
        { value: 'CX-04', label: 'Caixa com 04' },
        { value: 'CX-02', label: 'Caixa com 02' },
        { value: 'PC-12', label: 'Pacote com 12' },
        { value: 'PC-10', label: 'Pacote com 10' },
        { value: 'PC-08', label: 'Pacote com 08' },
        { value: 'PC-06', label: 'Pacote com 06' },
        { value: 'PC-04', label: 'Pacote com 04' },
        { value: 'PC-02', label: 'Pacote com 02' },
        { value: 'PC-01', label: 'Pacote com 01' },
        { value: 'FR-12', label: 'Fardo com 12' },
        { value: 'FR-10', label: 'Fardo com 10' },
        { value: 'FR-08', label: 'Fardo com 08' },
        { value: 'FR-06', label: 'Fardo com 06' },
        { value: 'FR-04', label: 'Fardo com 04' },
        { value: 'FR-02', label: 'Fardo com 02' },
      ]

    public static statusOptions: Array<PoSelectOption> = [
        { label: 'Ativo', value: true },
        { label: 'Inativo', value: false},
    ] 
}