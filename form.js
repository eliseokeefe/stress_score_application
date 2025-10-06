document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("intakeForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const formData = new FormData(form);
        const values = [];

        for (let [key, value] of formData.entries()) {
            if (key === "gender") {
                if (value === "male") {
                    values.push({ field: key, value: 0 });
                } else if (value === "female") {
                    values.push({ field: key, value: 1 });
                }
                else {
                // if not-disclosed/non-binary
                continue;
                }
            }
            
            const numValue = Number(value);
            values.push({
                field: key,
                value: isNaN(numValue) ? value : numValue
            });
        }
       
       

        //console.log(values);

        // TODO: implement sending this to backend
    });
});
