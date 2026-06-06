class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};


        for(let num of nums){
            countMap[num]=(countMap[num]||0)+1;
        }

        const buckets = Array.from({
            length:nums.length+1
        },()=>[]); 

        for (let num in countMap){
            const frequency =countMap[num];
            buckets[frequency].push(Number(num));
        }
        const result = [];

        for (let i = buckets.length-1;i>=0;i--){
            if(buckets[i].length>0){
                for(let num of buckets[i]){
                    result.push(num);

                    if(result.length===k){
                        return result;
                    }
                }
            }
        }

        return result;
    }
}
