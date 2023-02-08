interface INoteType {
    ancestor?: INoteType;
    children?: INoteType[];
}

function hasAncestor(msg?: INoteType | undefined): boolean {
    if (typeof msg === 'undefined')
        return false
    if (typeof msg.ancestor === 'undefined')
        return false
    else
        return true
}

function hasChildren(msg?: INoteType | undefined): boolean {
    if (typeof msg === 'undefined')
        return false
    if (typeof msg.children === 'undefined')
        return false
    else
        return true
}

export { hasAncestor, hasChildren, type INoteType }