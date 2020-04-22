<template>
    <div>
        <!-- npm install esprima estraverse escodegen   -->
        <textarea v-model="code" rows="20"></textarea>
        <el-button @click="transform">转化</el-button>
        <div class="pre">{{result}}</div>
    </div>
</template>
<script>
const esprima = require("esprima");
const estraverse = require("estraverse");
export default {
    data() {
        return{
            code:`var validateStackSequences = function(pushed, popped) {
                if(pushed.length!=popped.length) {
                    return false;
                }
                let j = 0;
                let stack = [];
                for(let i=0;i<pushed.length;i++) {
                    stack.push(pushed[i]);
                    // 如果遇到pop队列的数，就pop出来
                    while(stack.length&&stack[stack.length-1]===popped[j]) {
                        stack.pop();
                        j++;
                    }
                }
                return stack.length === 0;
            };`,
            result:'',
        };
    },
    methods: {
        transform() {
            this.result = JSON.parse(JSON.stringify(esprima.parse(this.code),null,4));
            // estraverse.traverse(this.result, {
            //     enter: function (node) {
            //        console.log(node);
            //     }
            // });

        }
    }
}
</script>
<style lang="scss" scoped>
textarea{
    width: 100%;
}
.pre{
    white-space: pre;
}
</style>