import {useMutation} from '@tanstack/react-query'
import apiClient from '../api/axiosConfig'
const useLogin = () => {
    return useMutation({
        mutationFn: (data: any) => apiClient.post('/login', data).then((res) => res.data),
    })
}
export default useLogin