const nodemailer = require('nodemailer')
export  class Workflow  {
    static executeWorkfow (req: any) {
        let {workflowName, steps} = req.body;
        let invalidStepTypes: any = [];
        let idsArr: any = [];
        let duplicateIds: any = [];
        if (!workflowName) {
            return ("Required field missing workflowName");
        }
        if (steps.length === 0) {
            return ("Required field missing steps");
        }
        steps.forEach((element: any) => {
            !["email", "webhook", "condition", "delay"].includes(element.type) ? invalidStepTypes.push(element.type) : idsArr.push(element.id);
        });

        if (invalidStepTypes.length > 0) {
            return (`Invalid type(s) provided ${invalidStepTypes}`);
        }
      
        steps.forEach((id: any) => {
            idsArr.includes(id) ? duplicateIds.push(id) : '';
        });
        if (duplicateIds.length > 0) {
            return (`Duplicate id(s) provided ${duplicateIds}`);
        }
        for(let step of steps) {
            switch (step.type) {
                case 'email':
                //send email function;
                step.config
                const 
                break;
                case 'condition':
                    //send email function;
                    break;
                case 'webhook':
                    //send email function;
                    break;    
            }
        }
        // Step 1: Send an email.

        // Step 2: Check the condition X > 5. If true, go to Step 3.
        // Save workflows in a relational database (e.g., PostgreSQL).
        // Evaluation Criteria:
        // Correct API design and validation.
        // Ability to dynamically execute workflows.
    }

    static  (req: any) {

    }
    
}

export default;