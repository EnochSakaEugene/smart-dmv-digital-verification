import { z } from "zod";

const digits = (v: string) => v.replace(/\D/g, "");

const isValidMMDDYYYY = (s: string) => {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(s);
  if (!m) return false;

  const mm = Number(m[1]);
  const dd = Number(m[2]);
  const yyyy = Number(m[3]);

  if (mm < 1 || mm > 12) return false;
  if (dd < 1 || dd > 31) return false;

  const nowY = new Date().getFullYear();
  if (yyyy < 1900 || yyyy > nowY) return false;

  const d = new Date(yyyy, mm - 1, dd);
  return d.getFullYear() === yyyy && d.getMonth() === mm - 1 && d.getDate() === dd;
};

export const step1Schema = z
  .object({
    need: z.object({
      driverLicense: z.boolean(),
      identificationCard: z.boolean(),
      motorcycleEndorsement: z.boolean(),
    }),

    lastName: z.string().min(1, "Last name is required"),
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    suffix: z.string().optional(),

    streetAddress: z.string().min(1, "Street address is required"),
    aptUnit: z.string().optional(),
    cityState: z.string(),
    zipCode: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits"),

    dateOfBirth: z.string().refine(isValidMMDDYYYY, "Use MM/DD/YYYY"),

    ssn: z.string().optional(),

    usCitizen: z.enum(["yes", "no"]).or(z.literal("")),
    gender: z.enum(["male", "female", "unspecified"]).or(z.literal("")),

    weightLbs: z.string().optional(),
    heightFt: z.string().optional(),
    heightIn: z.string().optional(),
    hairColor: z.string().optional(),
    eyeColor: z.string().optional(),
    otherNamesUsed: z.string().optional(),

    cellPhone: z.string().min(1, "Cell phone is required"),
    alternatePhone: z.string().optional(),
    textNotificationOptIn: z.boolean(),
    email: z.string().email("Enter a valid email address"),

    drivingHistory: z.object({
      everHadDriverLicense: z.enum(["yes", "no"]),
      issuedBy: z.string().optional(),
      suspendedOrRevoked: z.enum(["yes", "no"]),
      deniedElsewhere: z.enum(["yes", "no"]),
    }),
  })
  .superRefine((data, ctx) => {
    if (
      !data.need.driverLicense &&
      !data.need.identificationCard &&
      !data.need.motorcycleEndorsement
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Select at least one option",
        path: ["need"],
      });
    }

    if (data.usCitizen === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Select yes or no",
        path: ["usCitizen"],
      });
    }

    if (data.gender === "") {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Select a gender option",
        path: ["gender"],
      });
    }

    if (
      data.drivingHistory.everHadDriverLicense === "yes" &&
      !data.drivingHistory.issuedBy
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter the country, state, or jurisdiction",
        path: ["drivingHistory", "issuedBy"],
      });
    }
  });

export type Step1Values = z.infer<typeof step1Schema>;