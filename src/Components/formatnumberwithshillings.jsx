 // function to format number 
 export function formatNumberWithShillings(value) {
    let format_options = {
       style: 'currency',
       currency: 'UGX',
       minimumFractionDigits: 2,
    }

    // users can see how locale passed as a parameter.
    let shillingString = new Intl.NumberFormat("en-US", format_options);
    let finalString = shillingString.format(value);
    return finalString
    
 }
 //export  formatNumberWithShillings;