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
.primary-button {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    /* Added border-radius and box-shadow */
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.primary-button:hover {
    background-color: #379f7a;
    /* Slightly darker on hover */
}

.secondary-button {
    background-color: #e0e0e0;
    color: #333;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    /* Added border-radius and box-shadow */
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.secondary-button:hover {
    background-color: #c7c7c7;
    /* Slightly darker on hover */
}
</style>