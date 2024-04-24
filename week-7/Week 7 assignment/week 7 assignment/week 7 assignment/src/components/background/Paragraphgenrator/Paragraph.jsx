import { useMemo } from "react";

export function ParagraphGenerator(numWords) {
    const words = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];

    const paragraph = useMemo(() => {
        return Array.from({ length: numWords.numWords }, () => words[Math.floor(Math.random() * words.length)]).join(' ');
    }, [numWords]); // numWords is the dependency
    console.log({paragraph});
    console.log('numbers of words ',numWords.numWords);
    return <p>{paragraph}</p>;



   
}

