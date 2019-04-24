CREATE OR REPLACE TRIGGER sec_user_bi
  BEFORE INSERT ON sec_user
  FOR EACH ROW
DECLARE
BEGIN
      IF (:new.user_id IS NULL) THEN
         SELECT sec_user_seq.NEXTVAL INTO :new.user_id FROM dual;
      END IF;
      
      IF (:new.user_nm <> LOWER(:new.user_nm)) THEN
         :new.user_nm := LOWER(:new.user_nm);
      END IF;
END sec_user_bi;
/*******************************************************************************
                 Copyright 2008 Intellectual Reserve, Inc.

Trigger to ensure insertions to SEC_USER have a new PK from the sequence generator.
 
Artisan      Date      Comments
============ ========= ========================================================
bcoulam      2008Oct27 Initial creation.
bcoulam      2009Jan08 RECORDS-1743. Added chunk to ensure CN is recorded as lowercase.
*******************************************************************************/
/
