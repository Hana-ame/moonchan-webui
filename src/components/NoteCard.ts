interface INoteType {
    ancestor?: INoteType;
    children?: INoteType[];
}

function hasAncestor(msg: INoteType): boolean {
    if (typeof msg.ancestor === 'undefined')
        return false
    else
        return true
}

function hasChildren(msg: INoteType): boolean {
    if (typeof msg.children === 'undefined')
        return false
    else
        return true
}

export { hasAncestor, hasChildren, type INoteType }