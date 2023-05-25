import { useSearchParams } from "react-router-dom";

export const useQueryController = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const queryParams = Object.fromEntries(searchParams.entries());

    const addQueryParam = (paramName: string, valueForAdding: string | number) => {
        if(queryParams[paramName]){
            const currentQueryParam = queryParams[paramName].split(",")
            const updatedQueryParam = [...currentQueryParam, String(valueForAdding)].join(',')
    
            setSearchParams({[paramName]: updatedQueryParam})
        }else{
            setSearchParams({...queryParams, [paramName]: String(valueForAdding)})
        }   
    }
    
    const removeQueryParam = (paramName: string, valueForRemoval: string | number) => {
        const currentQueryParam = queryParams[paramName].split(",")  
        const updatedQueryParam = currentQueryParam.filter(value => value !== String(valueForRemoval)).join(',')

        console.log(updatedQueryParam)

        setSearchParams({...queryParams, [paramName]: updatedQueryParam})
    }

    const queryParamIncludes = (paramName: string, valueForFind: string | number) => {
        if(queryParams[paramName]){
            const currentQueryParam = queryParams[paramName].split(",")
            const valuesIsPresent = currentQueryParam.includes(String(valueForFind))
            return valuesIsPresent
        }else{
            return false
        }
    }

    return {
        queryParams,
        addQueryParam,
        removeQueryParam,
        queryParamIncludes
    }
}