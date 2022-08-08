-- CreateTable
CREATE TABLE "Todos" (
    "uuid" UUID NOT NULL,
    "owner_uuid" UUID NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE INDEX "Todos_owner_uuid_state_idx" ON "Todos"("owner_uuid", "state");
