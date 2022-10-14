import { AbstractControl } from "@angular/forms";

export function vaccineidValidator(control:AbstractControl):{[key:string]:boolean}|null{
    const vaccinationId=control.get('vaccinationId');
    const confirmVaccinationId=control.get('confirmVaccinationId');
    if(vaccinationId?.pristine||confirmVaccinationId?.pristine){
        return null;
    }
    
    return vaccinationId && confirmVaccinationId && (vaccinationId.value!=confirmVaccinationId)?
    {'mismatch':true}:
    null;
}