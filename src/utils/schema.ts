import * as z from 'zod';

const phoneNumberPattern = /^(25078|25072|25073).{7}$/;

export const addCandidateSchema = z.object({
  firstName: z.string().min(1,{message:"First name is required"}),
  lastName: z.string().min(1,{message:"Last name is required"}),
  email: z.string().email(),
  phone:z.string().regex(phoneNumberPattern, {
    message: 'Phone number must be in this format  2507******.',
  }),
  dateOfBirth:z.string().min(8),
});
export type AddCandidateDTo = z.infer<typeof addCandidateSchema>;
