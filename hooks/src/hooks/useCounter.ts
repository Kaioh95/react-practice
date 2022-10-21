import { useState } from "react";

export const useCounter = (initialValue: number): [number, Function, Function] => {
    const [count, setCount] = useState<number>(initialValue || 100);

    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    return [count, inc, dec]
}