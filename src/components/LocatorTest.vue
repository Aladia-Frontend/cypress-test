<template>
    <div class="locator-test">
        <h1 class="header" id="main-title">Locator Test Page</h1>

        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" placeholder="Enter username" class="form-input" />
        </div>

        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" class="form-input" />
        </div>

        <div class="button-group">
            <button id="submit-button" class="primary-button">Submit</button>
            <button id="cancel-button" class="secondary-button">Cancel</button>
        </div>

        <p class="info-text">Test your CSS and XPath locators on this page.</p>

        <ul class="item-list">
            <li class="item">Item 1</li>
            <li class="item">Item 2</li>
            <li class="item">Item 3</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LocatorTest",
};
</script>

<style scoped>
.locator-test {
    padding: 20px;
    background-color: #f5f5f5;
    max-width: 400px;
    margin: 0 auto;
}

.header {
    color: #333;
    margin-bottom: 20px;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.form-group label {
    margin-right: 10px;
    min-width: 80px;
}

.form-input {
    padding: 10px;
    width: 100%;
    max-width: 300px;
}

.button-group {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /* Center the buttons */
}

.primary-button {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
}

.secondary-button {
    background-color: #e0e0e0;
    color: #333;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.info-text {
    margin-top: 30px;
    color: #666;
}

.item-list {
    list-style-type: none;
    padding: 0;
}

.item {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 10px;
    border: 1px solid #ddd;
}
</style>