<template>
    <footer>
        <p>@Designed and developed by Nicolas CHAPEAU</p>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    footer {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #494356;
    }

    footer p {
        padding: 5px;
        background: rgba(255, 255, 255, 0.4);
        font-size: 16px;
    }

    @media screen and (max-width: 650px) {
        footer p {
            font-size: 13px;
        }
    }
</style>
