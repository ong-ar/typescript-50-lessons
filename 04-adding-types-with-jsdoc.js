// @ts-check

{
    /**
     * Adding two numbers. This annotation tells TypeScript
     * which types to expect. Two parameters (params) of
     * type number and a return type of number *
     * @param {number} numberOne
     * @param {number} numberTwo
     * @returns {number} 
     */
    function addNumbers(numberOne, numberTwo) {
        return numberOne + numberTwo
    }

    /**
     * @typedef {Object} StorageItem
     * @property {number} weight
     */

    /**
     * @typedef {Object} ShipStorage
     * @property {number} max
     * @property {StorageItem[]} items
     */

    /** @type ShipStorage */
    const storage = { max: undefined, items: [] };

    function storageUsed() {
        for (let i = 0; i < storage.length(); i++) {
            currentStorage += storage.items[i].weigth
        }
    }
}