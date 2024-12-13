import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/redirect"],
};

export const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname === "/redirect") {
    return NextResponse.redirect(
      "https://prod.cosy.bmw.cloud/miniweb/cosySec?COSY-EU-100-7331rjFhnOqIbqKlLDL3hpvYLfCny2oWYgpnQ97lX80UrO0ZYhVAfPXYuNnCB9%25UnpqyBLayV3WJYw1p8ac1QT8RcmZWkyhI%25uzWQdr0MSkPaz6q4VAbnkY6WNF9OAVF30KiIFNKJ4WwBK06McPteW4QAxb7MPcd189ChbxzbUilo98k%25GwXHiUmMptQ%25wDdw67aftqQ9YCn17LagmlOECJnPyXIsluYiTQBrXFIF3aeZQKBYdnMRaWeszOh5nPMZkIogObPSABHvI91ZFe%252Bil0KMfje12hWh1DME6CPoEqhs3abHsLoiC09%25rJHwk7ifZu%25tLsw1RSf78JtE5V1CF07sgNElX6Crv0sXsSlZ24r5JnXRjcZY80Q5DxRcToMou4TJg5IHSc3u8DC%25ViSFLrZfbYEGkPBDFjEoH%25ekxy11bH8wsFpRBpshTnzYgQmZ8XkWfTHWpf3TUO2kBxEaIe4YuzHNxl4bSht059yrVAfmXYucfCB9%25UdDOP7I2VZ8X5mMxoRCzJorO2kLG8stUfbYtdR"
    );
  }
  return NextResponse.next();
};
