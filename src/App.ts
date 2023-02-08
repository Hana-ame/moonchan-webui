import {INoteType as INoteType} from '@/components/NoteCard'

var msg:any = {
    ancestor: {
        text: "ancestor",
    },
    children: [
        {
            children: [{text: '3'}],
            text: "1"
        },
        {
            text: "2"
        }
    ],
    text: "main",
}

export {msg}