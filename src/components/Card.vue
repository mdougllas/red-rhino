<template>
        <div class="w-350 mx-20 h-650 bg-white mb-60 rounded-25 text-15 shadow-xl">
            <div class="h-400">
                <img
                    class="rounded-t-25 bg-image"
                    src=""
                    alt="Test"
                />
            </div>
            <div class="bg-blue-curve bg-cover bg-bottom w-full h-70 flex justify-center items-center text-24 text-white font-bold tracking-tighter">
                    test
            </div>
            <div class="flex justify-center mt-20 text-22 font-semibold">
                test
            </div>
            <div class="flex justify-center mt-10 text-18">
                test
            </div>
            <div class="flex justify-center mt-20">
                <Button text="DETAILS" target=test />
            </div>
        </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'Card',
    components: { Button }
}
</script>