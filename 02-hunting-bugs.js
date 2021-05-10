// @ts-check

/**
 * //@ts-check, TypeScript became active in our JavaScript file and showed the first list of problems
 */

{
    const myName = 'Stefan';
    myName


    const storage = {
        max: undefined,
        item: []
    }

    Object.defineProperty(storage, 'max', { writable: true, value: 5000 })
    let currentStorage = undefined
    function storageUsed() {
        if (currentStorage) {
            return currentStorage
        }
        currentStorage = 0
        for (let i = 0; i < storage.length(); i++) {
            currentStorage += storage.items[i].weigth
        }
        return currentStorage
    }
    function add(item) {
        if (storage.max - item.weight >= storageUsed()) {
            storage.items.add(item)
            currentStorage += item.weight
        }
    }
}
