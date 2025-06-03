const recipeValidators={
    checkLevel:(level)=>{
        const validLevels = ["Easy", "Medium", "Hard"];
        if (!validLevels.includes(level)) {
            throw new Error("oops!");
        }
    },
    checkType:(level)=>{
        const validTypes = ["daity", "parev", "meat"];
        if (!validTypes.includes(level)) {
            throw new Error("oops!");
        }
    }
}
export default recipeValidators