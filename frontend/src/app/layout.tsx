import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SideNav from "./ui/sidenav";

const drawerWidth = 240;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White Clinic",
  description: "White Clinic Management Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
              boxShadow: "none",
              bgcolor: "#F4F7FA",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ color: "#888888" }}
              >
                White Clinic 관리자
              </Typography>
            </Toolbar>
          </AppBar>
          <SideNav />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "#F4F7FA",
              p: 3,
            }}
          >
            <Toolbar />
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </Box>
        </Box>
      </body>
    </html>
  );
}
