import jwt, { JwtPayload } from "jsonwebtoken";
export const validateJWT = (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      "oj1xEPr/lbugNhwcphToKJsFrouxHefxbhLDHXpvk3tJDeou9rr8CX4YMzrSNPWTyvELcSrjg+IQ6fN7j7H5Pdii3FzUe6OcABZYLHF5sWgsWO6U5JXYu4p+vAZ4hg3H0d4QUaY4PZ3lJwBEp4t8l5m2N4Cams+nG/IqC46R70EldeIsfujxbHBw7G3sQSsLaFSPTaYJUSJIE8Iz39UfDPBcwqZY3dK1GU/ZHOUEBEhUc0/NpWN2XeZC37jDDwvmod0x8x60I3dIMg6FOBSHrU8gYpFNWixctZfbjw3Z+Nz1AapdmqGfaATzNZXgKeJSJFCes3QmTYQYiam4+88rQQ=="
    ) as JwtPayload;
    return decoded;
  } catch (err) {
    console.log("Token error");
    console.log(err);
    return null;
  }
};
