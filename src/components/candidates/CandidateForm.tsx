import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddCandidateDTo, addCandidateSchema } from '../../utils/schema';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import { useMutation } from '@tanstack/react-query';
import { createCandidate } from '../../services/candidates';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';


const CandidateForm = () => {
  const navigate = useNavigate();
  const {isPending,...mutation} = useMutation({
    mutationFn:createCandidate,
    onSuccess:()=>{
      toast.success("candidate Added !");
      navigate("/candidates")
    },
});
  const { control, handleSubmit, formState: { errors } } = useForm<AddCandidateDTo>({
    resolver: zodResolver(addCandidateSchema),
  });

  const handleAddCandidate = (data:AddCandidateDTo)=>{
    mutation.mutate({...data,dateOfBirth:new Date(data.dateOfBirth).toISOString()})
  }
  
  return (
    <div className="w-full bg-white p-6 rounded-md border">
      <div className="w-full space-y-3">
        <p className=" text-gray-600 font-bold text-xl">Add candidate</p>
        <div className="w-full border p-4 rounded-md">
          <p className="font-semibold text-base text-gray-600">Candidate details</p>
          <form onSubmit={handleSubmit(handleAddCandidate)} className=' space-y-3 mt-4'>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField name='firstName' label='First name' control={control} errors={errors} />
              <InputField name='lastName' label='Last name' control={control} errors={errors} />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField name='email' label='Email' control={control} errors={errors} />
              <InputField name='phone' label='Phone' control={control} errors={errors} />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField type='date' name='dateOfBirth' label='Date of birth' control={control} errors={errors} />
            </div>
            <Button  isLoading={isPending} disabled={isPending} label='save' className='bg-[#4B93E7] px-12 text-center' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default CandidateForm