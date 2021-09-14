export const updateObjectInArray = (items, itemsId, objectId, followedTrueOrFalse) => {
    return items.map(u => {    //в этой строке проходимся по users мапам где приходит юзер а дальше выполнеяем условия по фоловеру                    
        if (u[itemsId] === objectId) {
            return { ...u, ...followedTrueOrFalse };
        }
        return u;
    }
    )
}
