export type Level  = {
    title:string;
    color: string;
    icon: string;
    imc: number[];
    yourIMC ?: number;
}


export const levels: Level[] = [
    {title: 'Magreza' ,color:'#949494',icon: 'down' ,imc:[0 , 18.5]},
    {title: 'Normal' ,color:'#008712',icon:'up' ,imc:[18.6, 24.9]},
    {title: 'Sobrepeso' ,color:'#b0b302' ,icon:'down' ,imc:[25, 30]},
    {title: 'Obesidade' ,color:'#d10202',icon:'down' ,imc:[30.1, 99]},
];

export const calculateIMC = ( weight:number, height:number) => {
    const imc = weight / (height*height);

    for ( let i in levels){
        if(imc>=levels[i].imc[0] && levels[i].imc[1]){
            levels[i].yourIMC = imc
            return levels [i]
        }
    }
    return null
}