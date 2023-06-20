-- CreateTable
CREATE TABLE "bagra" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "producing" BOOLEAN NOT NULL,

    CONSTRAINT "bagra_pkey" PRIMARY KEY ("id")
);
