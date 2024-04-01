import { useQuery } from "@tanstack/react-query"
import Button from "../../components/common/Button"
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { getCandidates } from "../../services/candidates"



export default function CandidateList() {
  const {data} = useQuery({queryKey:["candidates"],queryFn:getCandidates})
  return (
    <div className="w-full bg-white p-6 rounded-md border">
      <div className="w-full space-y-3">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Candidates</h1>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <Button link="/candidates/add" icon={<PlusCircleIcon className="w-7" />} label="Add candidate" className="bg-[#4B93E7]" />
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                        >
                          Name
                        </th>
                        
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Phone
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
                          <span className="sr-only"></span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {
                        data?.map(candidate=>{
                          return(
                          <tr key={candidate._id}>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidate.firstName} {candidate.lastName}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidate.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{candidate.phone}</td>
                            <td></td>
                          </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}