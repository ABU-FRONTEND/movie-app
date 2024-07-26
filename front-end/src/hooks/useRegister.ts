import {useMutation} from '@tanstack/react-query'
import apiClient from '../api/axiosConfig'
const useRegister = () => {
    return useMutation({
        mutationFn: (data: any) => apiClient.post('/register', data).then((res) => res.data),
    })
}
export default useRegister