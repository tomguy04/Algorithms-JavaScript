/*
Design a data structure that supports all following operations in average O(1) time.
1. insert(val): Inserts an item val to the set if not already present.
2. remove(val): Removes an item val from the set if present.
3. getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
*
Example:
// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();*/
class RandomizedSet {
    constructor(){
        this.hash={};
        this.length=0;
    }
    insert(val){
        if(!this.hash[val]){
            this.hash[val]=true;
            this.length++;
            return true;
        }
        return false;
    }
    remove(val){
        if(!this.hash[val]){
            return false;
        }else{
            delete this.hash[val];
            this.length--;
            return true;
        }

    }
    getRandom(){
        let keys=Object.keys(this.hash);
        let randomIndex = Math.random();
        return keys[Math.round((keys.length-1)*randomIndex)];    
    }
}
// Init an empty set.
randomSet = new RandomizedSet();
// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.log(randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());

// Removes 1 from the set, returns true. Set now contains [2].
console.log(randomSet.remove(1));

// 2 was already in the set, so return false.
console.log(randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());
