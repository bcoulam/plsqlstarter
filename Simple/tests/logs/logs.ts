[Item1]
Description=logs.set_get_targets
TestScript=ut.logs.set_get_targets.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_stdout
Var1Enabled=True
Var1Global=False
Var1Type=Integer
Var1InputValue=1
Var1OutputValue=
Var2Name=i_table
Var2Enabled=True
Var2Global=False
Var2Type=Integer
Var2InputValue=1
Var2OutputValue=
Var3Name=i_file
Var3Enabled=True
Var3Global=False
Var3Type=Integer
Var3InputValue=1
Var3OutputValue=
Var4Name=v_result
Var4Enabled=True
Var4Global=False
Var4Type=String
Var4InputValue=
Var4OutputValue=Screen[TRUE] Table[TRUE] File[TRUE]
[Item2]
Description=logs.get_log_dir
TestScript=ut.logs.get_log_dir.tst
NewSession=False
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=
Var1OutputValue=APP_DIR
[Item3]
Description=logs.get_log_nm
TestScript=ut.logs.get_log_nm.tst
NewSession=False
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=
Var1OutputValue=XE_app.log
[Item4]
Description=logs.get_log_path
TestScript=ut.logs.get_log_path.tst
NewSession=False
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=
Var1OutputValue=C:\temp\XE_app.log
[Item5]
Description=logs.set_log_parms
TestScript=ut.logs.set_log_parms.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_file_dir
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=BOGUS_DIR
Var1OutputValue=
Var2Name=i_file_nm
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=bogus_file.log
Var2OutputValue=
Var3Name=dbms_output
Var3Enabled=True
Var3Global=False
Var3Type=
Var3InputValue=
Var3OutputValue=BOGUS_DIR:bogus_file.log
[Item6]
Description=logs.set_get_log_dir
TestScript=ut.logs.set_get_log_dir.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_file_dir
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=CORE_DIR
Var1OutputValue=
Var2Name=result
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=
Var2OutputValue=CORE_DIR
[Item7]
Description=logs.set_get_log_nm
TestScript=ut.logs.set_get_log_nm.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_file_nm
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=my_logfile.log
Var1OutputValue=
Var2Name=result
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=
Var2OutputValue=my_logfile.log
[Item8]
Description=logs.set_dbg
TestScript=ut.logs.set_dbg.tst
NewSession=False
Enabled=True
Performance=
Var1Name=dbms_output
Var1Enabled=True
Var1Global=False
Var1Type=
Var1InputValue=
Var1OutputValue=But this is the only one that will show since I just turned debugging on.
[Item9]
Description=logs.set_dbg (boolean)
TestScript=ut.logs.set_dbg_bool.tst
NewSession=False
Enabled=True
Performance=
Var1Name=dbms_output
Var1Enabled=True
Var1Global=False
Var1Type=
Var1InputValue=
Var1OutputValue=But this is the only one that will show since I just turned debugging on.
[Item10]
Description=logs.err (simple)
TestScript=ut.logs.err_simple.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_msg
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=Just a simple, no code, no sev, no routine, reraise log message.
Var1OutputValue=
[Item11]
Description=logs.err (simple using loop)
TestScript=ut.logs.err.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_stdout
Var1Enabled=True
Var1Global=False
Var1Type=
Var1InputValue=1
Var1OutputValue=
Var2Name=i_table
Var2Enabled=True
Var2Global=False
Var2Type=
Var2InputValue=1
Var2OutputValue=
Var3Name=i_file
Var3Enabled=True
Var3Global=False
Var3Type=
Var3InputValue=1
Var3OutputValue=
Var4Name=dbms_output
Var4Enabled=False
Var4Global=False
Var4Type=
Var4InputValue=
Var4OutputValue=2012/02/14|21:06:04|xe|113|LDS\R9AXR65:plsqldev.exe:LDS\CoulamWA|ANONYMOUSBLOCK|
=14|ERROR|Message number 1
[Item12]
Description=logs.err (reraise)
TestScript=ut.logs.err_reraise.tst
NewSession=False
Enabled=False
Performance=
Var1Name=i_routine_nm
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=logs.err test
Var1OutputValue=
Var2Name=i_reraise
Var2Enabled=True
Var2Global=False
Var2Type=Integer
Var2InputValue=1
Var2OutputValue=
[Item13]
Description=logs.err (noraise)
TestScript=ut.logs.err_noraise.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_msg
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=An error message to pass to logs.err!
Var1OutputValue=
Var2Name=i_routine_nm
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=logs.err test
Var2OutputValue=
Var3Name=i_reraise
Var3Enabled=True
Var3Global=False
Var3Type=Integer
Var3InputValue=0
Var3OutputValue=
[Item14]
Description=logs.warn
TestScript=ut.logs.warn.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_msg
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=This is my handy warning message. Watch out now!
Var1OutputValue=
Var2Name=i_routine_nm
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=logs.warn test
Var2OutputValue=
[Item15]
Description=logs.info
TestScript=ut.logs.info.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_msg
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=This is just an informational message.
Var1OutputValue=
Var2Name=i_routine_nm
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=logs.info test
Var2OutputValue=
[Item16]
Description=logs.dbg
TestScript=ut.log.dbg.tst
NewSession=False
Enabled=True
Performance=
Var1Name=i_msg
Var1Enabled=True
Var1Global=False
Var1Type=String
Var1InputValue=This is a great way to comment code, thus documenting and providing contextual debugging at the same time.
Var1OutputValue=
Var2Name=i_routine_nm
Var2Enabled=True
Var2Global=False
Var2Type=String
Var2InputValue=logs.dbg test
Var2OutputValue=
