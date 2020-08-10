//Objective is to design a time based store that stores key and value pairs
//with their given timestamps. The data structure has two operations: 'set' and 'get'
//'Set' will put the given value into the data structure with it's timestamp
//'Get' will get the value from the data structure given a key and timestamp 


//O(1) && O(logn) solutions for 'set' and 'get' respectively

class TimeBasedStore {
    constructor() {
        this.map = new Map()
    }

    //O(1) solution that pushes the new set into the map
    set(key, value, timestamp) {
        if (!this.map.has(key)) {
            this.map.set(key, [])
        }

        this.map.get(key).push({value: value, timestamp: timestamp})
    }

    //O(logn) solution that uses binary search to find the correct key at the 
    //appropriate timestamp
    get(key, timestamp) {
        if (!this.map.has(key)) {
            return ''
        }

        let arr = this.map.get(key)
        let low = 0
        let high = arr.length - 1

        while (low < high) {
            let mid = Math.floor((low + high) / 2)

            if (arr[mid].timestamp == timestamp) {
                return arr[mid].value
            } else if (arr[mid] < timestamp) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }

        while (low >= 0 && arr[low].timestamp > timestamp) {
            low--
        }

        return low >= 0 ? arr[low].value : ''
    }
}